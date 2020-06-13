'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increases temperature by 1', function() {
      thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decreases temperature by 1', function() {
    thermostat.down()
  expect(thermostat.getCurrentTemperature()).toEqual(19);
});
it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});