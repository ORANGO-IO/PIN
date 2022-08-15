import { PluginConnectionProps } from '../types'

interface Input {
  type: string;
  label: string;
}

interface ChangeRecordFormProps extends PluginConnectionProps {
  args: { inputs: Input[] };
}

/**
 * TODO It's a draft
 * @description Deve ser possível adicionar campos ao formulário de registros médicos da aplicação. Os dados serão manipulados pelo plugin que está injetando o campo, por isso o schema, migration e a resolução de como exibir esses dados devem ser trabalhados pelo plugin injetor.
 */
const changeRecordForm = (props: ChangeRecordFormProps): void => {
  props.args.inputs.forEach(input => {
    console.log(`Adicionando ao formulário o campo ${input.label} do tipo ${input.type}`)
  })
}

export default changeRecordForm
