"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("../../src/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.pokemonRoutes);
describe('API Integration Tests', () => {
    it('should get pokemon data', async () => {
        const response = await (0, supertest_1.default)(app).get('/api/pokemon/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
    });
});
