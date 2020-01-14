import { CodeBook } from './CodeBook';

export class CodeBookKey {
    id: number;
    codeBookKeyId: number;
    codeBookId: number;
    codeBook?: CodeBook;
    children?: CodeBookKey[];
    isOpen = false;
}
