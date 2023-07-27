import useFetch from "../customHooks/useFetch"
import Farm from "./Farm"
import { Grid } from "@mui/material";
import { css } from '@emotion/react';

interface FarmSchema {
    name: string;
    location: string;
    farmSuffix: string;
    _id: string;
}
interface FarmListProps {
    filterQuery?: string;
}
let farms: FarmSchema[] // [{ farmName: "chakuti", farmID: " fldleirl", farmLocation: "pther", farmSuffix: "LAGA" }]
//const urlEndpoint: string = 'http://localhost:4000/farms'

export default function FarmList({ filterQuery }: FarmListProps) {

    const farmsResult = useFetch()
    farms = farmsResult.data ? farmsResult.data : []
    //filter by Location
    const farmsFiltered = filterQuery ? farms.filter((farm) => { return farm.location === filterQuery }) : farms




    return (<Grid container >{farmsFiltered.map((farmDetails) => { return <Grid css={{ display: `flex` }} item xs={12} sm={6} spacing={1} md={4} lg={3} key={farmDetails._id}><Farm key={farmDetails._id} farmName={farmDetails.name} farmID={farmDetails._id} farmLocation={farmDetails.location} farmSuffix={farmDetails.farmSuffix} /> </Grid> })}
    </Grid>)
}