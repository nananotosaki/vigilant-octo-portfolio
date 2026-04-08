import { expect, test } from 'vitest'
import { handleCommand } from '../src/Commands.js'

test('handleCommand returns correct output for "help" command', () => {
    const result = handleCommand("help");
    expect(result.type).toBe("list");
    expect(result.content.length).toBeGreaterThan(0);
});

test('handleCommand returns correct output for "skills" command', () => {
    const result = handleCommand("skills");
    expect(result.type).toBe("list");
    expect(result.content.length).toBeGreaterThan(0);
});

test('handleCommand returns correct output for "projects" command', () => {
    const result = handleCommand("projects");
    expect(result.type).toBe("list");
    expect(result.content.length).toBeGreaterThan(0);
});

test('handleCommand returns correct output for "about" command', () => {
    const result = handleCommand("about");
    expect(result.type).toBe("text");
    expect(result.content.length).toBeGreaterThan(0);
});

test('handleCommand returns correct output for "contact" command', () => {
    const result = handleCommand("contact");
    expect(result.type).toBe("list");
    expect(result.content.length).toBeGreaterThan(0);
});
test('handleCommand returns correct output for "resume" command', () => {
    const result = handleCommand("resume");
    expect(result.type).toBe("text");
    expect(result.content.length).toBeGreaterThan(0);
});

test('handleCommand returns correct output for "blog" command', () => {
    const result = handleCommand("blog");
    expect(result.type).toBe("text");
    expect(result.content.length).toBeGreaterThan(0);
});

test('handleCommand returns correct output for invalid command', () => {
    const result = handleCommand("invalidcommand");
    expect(result.type).toBe("text");
    expect(result.content.length).toBeGreaterThan(0);
} );

test('handleCommand returns correct output for easter egg command', () => {
    const result = handleCommand("sudo rm -rf /");
    expect(result.type).toBe("text");
    expect(result.content.length).toBeGreaterThan(0);
});

test('clear command does not return anything', () => {
    const result = handleCommand("clear");
    expect(result.type).toBe("clear");
    expect(result.content).toBeNull();
});