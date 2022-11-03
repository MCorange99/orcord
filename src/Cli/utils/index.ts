
export function remove_ctrl(str: string) {
    return str
        .replace("^c", "")
        .replace("^[[A", "")
        .replace("^[[B", "")
        .replace("^[[C", "")
        .replace("^[[D", "");
}