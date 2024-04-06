import { FormWrapper } from "./FormWrapper"
import "./OptionalForm.css"

type OptionalData = {
    languaje:string
    student: string
    years:string
}

type OptionalFormProps = OptionalData & {
  updateFields: (fields: Partial<OptionalData>) => void
}

export function OptionalForm({
  languaje,
  student,
  years,
  updateFields,
}: OptionalFormProps) {
  return (
    <FormWrapper title="Ocupation Details">
      
      <label>Prefered  programming language</label>
      <input
        type="string"
        value={languaje}
        onChange={e => updateFields({ languaje: e.target.value })}
      /> 

      <label>Are you a student?</label>
      <select value={student} onChange={e => updateFields({ student: e.target.value })}> 
        <option value="" disabled hidden>Choose here</option>
        <option value="Yes" >Yes</option>
        <option value="No" >No</option>
      </select>
     
        <div></div>
      {student === "Yes" &&
       <div className="years"> 
          <label>How many years?</label> 
                <input
                    type="number"
                    value={years}
                    onChange={e => updateFields({ years: e.target.value })}
                /> 
       </div>
     }
        
        
      
      
    </FormWrapper>
  )
}