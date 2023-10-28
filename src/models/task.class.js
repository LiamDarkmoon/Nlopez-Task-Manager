import { LEVELS } from "./levels.enum";

export class Task {
    name = " ";
    description = " ";
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, complete, level) {
        this.name = name;
        this.description = description;
        this.completed = false;
        this.level = level;
    }
}