import { FormWrapper } from "./FormWrapper"

type OptionalData = {
  student: string
}

type OptionalFormProps = OptionalData & {
  updateFields: (fields: Partial<OptionalData>) => void
}

export function OptionalForm({
  
  student,
  updateFields,
}: OptionalFormProps) {
  return (
    <FormWrapper title="Ocupation Details">
      
      {/* <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      /> */}
      <label>Are you a student?</label>
      <select value={student} onChange={e => updateFields({ student: e.target.value })}> 
        <option value="" selected disabled hidden>Choose here</option>
        <option value="Yes" > Yes</option>
        <option value="No" > No</option>
      </select>
    </FormWrapper>
  )
}