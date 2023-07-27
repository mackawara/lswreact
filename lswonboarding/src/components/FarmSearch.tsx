
import { useForm, SubmitHandler } from "react-hook-form"
import FarmList from "./FarmList"




interface IFormInput {
    search: string
}

export default function FarmSearch() {
    console.log("render")
    const { register, handleSubmit, watch } = useForm<IFormInput>({ defaultValues: { search: "" } })
    const onSubmit: SubmitHandler<IFormInput> = (data) => { console.log(data.search); }
    const query: string = watch(`search`)
    console.log(query)
    return (<> <div css={{ display: `block`, width: `100%` }}><form onSubmit={handleSubmit(onSubmit)}>
        <label>Search by Location</label>
        <input {...register("search")} placeholder="Search for Farm by location eg. Cedarville" />
        <input type="submit" />
    </form></div>
        <FarmList filterQuery={query} />
    </>

    )
}