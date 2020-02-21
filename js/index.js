"use strict";

const sm1 = new SmartHouse("sweet");
const ac1 = new AirCleaner("moyka", new Mode(["one", "two", "three"]));
const ac2 = new AirCleaner("moyka2", new Mode(["four", "five", "six"]));
sm1.addDevice(ac1);
sm1.addDevice(ac2);

const r1 = new RobotHoover("robot", new Mode(["dry", "wet"]));
sm1.addDevice(r1);