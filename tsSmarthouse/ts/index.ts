const sh = new SmartHouse("sh1");

const device1 = new AirCleaner("moyka", new Mode(["one", "two"]));
sh.addDevice(device1);
sh.addDevice(new AirCleaner("air", new Mode(["three", "four", "five"])));