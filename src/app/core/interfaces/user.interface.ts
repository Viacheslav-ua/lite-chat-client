import { Color } from "./color.interface";

export interface User {
    readonly id: string;
    readonly name: string;
    readonly avatarBackgroundColor: Color;
}
