declare module "ctrl-c" {
    type _ignoreCtrlC = false;

    type CtrlC = (ign) => void;

    module.exports = CtrlC;
}