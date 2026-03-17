"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../src/services");
describe('PokemonService', () => {
    let service;
    beforeEach(() => {
        service = new services_1.PokemonService();
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    // Add more tests as needed
});
