// TODO Essa interface deve ficar no core
export interface PluginConnectionProps {
    type: 'input' | 'output',
    fromFunction: string,
    returnToFunction: string,
    args: any
}
