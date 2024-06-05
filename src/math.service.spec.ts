// src/math.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
let mathService: MathService;

beforeEach(async () => {
const module: TestingModule = await Test.createTestingModule({
providers: [MathService],
}).compile();

mathService = module.get<MathService>(MathService);
});

it('should add two numbers', () => {
const result = mathService.add(2, 3);
expect(result).toBe(5);
});
it('should multiply two numbers', () => {
const result = mathService.multiply(2, 3);
expect(result).toBe(6);
});
});