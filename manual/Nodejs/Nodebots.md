---
menu: Node
name: Nodebots
---

# Nodebots

Using the Johnny-Five stater kit and Tessel 2 to create IoT using JS. He speaks to the npm ecosystem making things nice for Nodebots. It uses Tessel for the kit.

## Resources

1. [FE Course](https://frontendmasters.com/courses/nodebots/)
2. [Git Repo](https://github.com/stevekinney/nodebots-workshop)
3. [Slides](https://speakerdeck.com/stevekinney/nodebots-frontend-masters)
4. [Johnny-Five Inventor's Kit](https://www.sparkfun.com/products/14604)
5. [Tessel 2](https://tessel.github.io/t2-start/)

## Tasting Notes

- All 16 pins can be used for GPIO (general purpose input/output).
- Pins A4, A7 and all pins on the B port can be used for analog to digital input.
- Pins A5, A6, B5 and B6 support pulse-width modulation.
- Pins A0, A1, B0 and B1 support I2C serial coommunication.
- UART is available on both A5 and B5 (TX) and A6 and B6 (RX).
- Pin B7 supports digital-to-analog conversion.

> I2C is for more complicated components. The I2C protocol involves using two lines to send and receive data: a serial clock pin (SCL) that the board pulses at a regular interval, and a serial data pin (SDA) over which data is sent between the two devices. As the clock line changes from low to high (known as the rising edge of the clock pulse), a single bit of information - that will form in sequence the address of a specific device and a a command or data - is transferred from the board to the I2C device over the SDA line. When this information is sent - bit after bit -, the called upon device executes the request and transmits it's data back - if required - to the board over the same line using the clock signal still generated by the Master on SCL as timing.

## Getting an LED to Blink

```javascript
'use strict';

const tessel = require('tessel');

setInterval(() => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("I'm blinking! Press ctrl + c to stop.");
```