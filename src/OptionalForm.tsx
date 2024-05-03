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
      
      <label htmlFor="language">Prefered  programming language</label>
      <input
        id="language"
        type="string"
        value={languaje}
        onChange={e => updateFields({ languaje: e.target.value })}
      /> 

      <label htmlFor="student">Are you a student?</label>
      <select id="student" value={student} onChange={e => updateFields({ student: e.target.value })}> 
        <option value="" disabled hidden>Choose here</option>
        <option value="Yes" >Yes</option>
        <option value="No" >No</option>
      </select>
     
        <div></div>
      {student === "Yes" &&
       <div className="years"> 
          <label htmlFor="years">How many years?</label> 
                <input
                    id="years"
                    type="number"
                    value={years}
                    onChange={e => updateFields({ years: e.target.value })}
                /> 
       </div>
     }
        
        
      
      
    </FormWrapper>
  )
}