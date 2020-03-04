const sh = new SmartHouse("sh1");
const device1 = new AirCleaner("moyka", new Mode(["one", "two"]));
sh.addDevice(device1);
sh.addDevice(new AirCleaner("air", new Mode(["three", "four", "five"])));
sh.addDevice(new RobotHoover("robot", new Mode(["wet", "dry"])));
sh.delayOn("moyka", 1000)
    .then(() => console.log("on!!"))
    .then(() => sh.delayOff("moyka", 1000))
    .then(() => console.log("offff"));
