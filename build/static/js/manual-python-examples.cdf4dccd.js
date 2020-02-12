(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{"./manual/Python/Examples.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o={},r="wrapper";function a(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)(r,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"python-examples"},"Python Examples"),Object(i.b)("p",null,"This section is just a collecton of interesting real world scripts that were used for one reason for another."),Object(i.b)("h2",{id:"sentry-script-w-datetime-requests-csv-multiprocessing-and-threading"},"Sentry Script w/ datetime, requests, csv, multiprocessing and threading"),Object(i.b)("p",null,"A script used to fetch 92k events from Sentry using all OS cores and multithreading."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),"\"\"\"\nRead all the issue IDs saved, then iterate through, find all their issues and paginate through all\n\"\"\"\nimport requests\nimport csv\nimport os\nimport sys\nimport urllib.request\nimport datetime\n\nfrom multiprocessing import Pool\nimport threading\ncsv_writer_lock = threading.Lock()\ntotal_events_lock = threading.Lock()\nrecord_log = True\n\n# for logging\nif record_log:\n    old_stdout = sys.stdout\n    log_file = open(\"fetch_events_by_issue.log\",\"w\")\n    sys.stdout = log_file\n\n\norganization_slug = \"REDACTED\"\nproject_slug = \"REDACTED\"\nbase_url = \"https://sentry.io/api/0\"\n\nheaders = {\n    'Authorization': 'Bearer REDACTED'\n}\n\n\ncursor = 0\n\ndef post_to_slack(message):\n    data = '{\"text\":\"' + message + '\"}'\n    url = 'https://hooks.slack.com/services/REDACTED/REDACTED/REDACTED'\n    req = urllib.request.Request(url, data.encode('utf-8'), {'Content-Type': 'application/json'})\n    res = urllib.request.urlopen(req)\n\n\n# not the best idea but whatever\ntotal_events_with_console_logs = 0\nbreadcrumbs = False\ndef handle_event(event):\n    try:\n        global total_events_with_console_logs\n        global breadcrumbs\n\n        event_has_console_breadcrumbs = False\n        # get single event from the API\n        event_id = event.get(\"eventID\")\n        issue_id = event.get(\"groupID\")\n        print(\"Found a single event with ID: \" + event_id)\n        single_event_url = base_url + \"/projects/\" + organization_slug + \"/\" + project_slug + \"/events/\" + event_id + \"/\"\n        event_response = requests.get(single_event_url, headers=headers)\n\n        row_dict = {\n            'issue_id': issue_id,\n            'event_id': event_id,\n            'console_output': ''\n        }\n        # retreive the metadata\n        print(f'[{datetime.datetime.now()}]  Trying to find breadcrumbs for event ID: {event_id}')\n        event_data = event_response.json()\n\n        for entry in event_data['entries']:\n            if entry['type'] == 'breadcrumbs':\n                breadcrumbs = entry.get('data', {}).get('values', {})\n        if breadcrumbs and len(breadcrumbs) > 0:\n            for crumb in breadcrumbs:\n                if crumb['category'] == 'console':\n                    event_has_console_breadcrumbs = True\n                    print(f'[{datetime.datetime.now()}] Found a console breadcrumb!')\n                    row_dict['console_output'] = crumb\n                    with csv_writer_lock:\n                        writer.writerow(row_dict)\n\n        if event_has_console_breadcrumbs:\n            with total_events_lock:\n                try:\n                    total_events_with_console_logs += 1\n                except Exception as e:\n                    print(f'[{datetime.datetime.now()}] Failed to append to total_events_with_console_logs')\n        else:\n            print(f'[{datetime.datetime.now()}]  Did not find any breadcrumbs.')\n            row_dict['console_output'] = 'No console output!'\n            with csv_writer_lock:\n                writer.writerow(row_dict)\n    except Exception as e:\n        print(f'Failed for {event.get(\"eventID\")}', e.message)\n\n\ndef handle_issue(issue_id):\n    \"\"\"\n    For issue ID, continually fetch all events and paginate until there are none.\n\n    With each event, handle it such that it fetches and appends the required data.\n    \"\"\"\n    # writer.writeheader()\n    list_events_url = f'{base_url}/issues/{issue_id}/events/'\n    attempt = 1\n    while list_events_url is not None:\n        try:\n            if attempt > 5:\n                post_to_slack(f'[{datetime.datetime.now()} FAILED]: Reached 5 attempts for {list_events_url}')\n                list_events_url = None\n                break\n            # get the events\n            print(f'[{datetime.datetime.now()}] NEXT] Getting page of results: {list_events_url}')\n            response = requests.get(list_events_url, headers=headers)\n            # data is an array of events\n            data = response.json()\n            for event in data:\n                handle_event(event)\n            # is there another page of events?\n            link = response.headers.get(\"Link\")\n            # reset attempt if successful\n            attempt = 1\n            if link and 'rel=\"next\"; results=\"true\"' in link:\n                post_to_slack(f'[{datetime.datetime.now()} SUCCESS]: Finished results for {list_events_url}')\n                list_events_url = link.split()[4][1:-2]\n                print(f'[{datetime.datetime.now()} NEXT]: Getting another page of event from issue_id {issue_id} - URL {link}.')\n            else:\n                post_to_slack(f'[{datetime.datetime.now()} SUCCESS]: Finished results for {list_events_url}')\n                list_events_url = None\n        except Exception as e:\n            print(f'[{datetime.datetime.now()} WARNING]Fetch attempt {attempt} failed: {list_events_url}', e)\n            post_to_slack\n            attempt += 1\n\ntry:\n    with open('./fetch_events_by_issue.csv', 'w') as output_file:\n        fieldnames = ['issue_id', 'event_id', 'console_output']\n        writer = csv.DictWriter(output_file, fieldnames=fieldnames)\n        print(f'[{datetime.datetime.now()}Writing headers for csv')\n        with open('./project_issues.csv', 'r') as file:\n            data = file.read().splitlines()\n            # use attempts to give up after trying 10 times on the same URL\n            chunksize = 1\n            proc_count = os.cpu_count()\n            with Pool(processes=proc_count) as pool:\n                result = pool.map(handle_issue, data, chunksize)\n\n\nexcept:\n    post_to_slack(f'[{datetime.datetime.now()} FAILED]: Script crashed')\nfinally:\n    post_to_slack(f'[{datetime.datetime.now()} COMPLETED]: Script finished')\n    if record_log:\n        sys.stdout = old_stdout\n        log_file.close()\n")))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/Python/Examples.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-python-examples.101a1afd2417ec7a4a77.js.map