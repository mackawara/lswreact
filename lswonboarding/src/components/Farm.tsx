//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { css } from '@emotion/react';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import fonts from '../assets/fonts';

interface FarmProps {
    farmID: string, farmName: string, farmSuffix: string, farmLocation: string
}
const darkFontColor = `#260c1aff`;
const lighFontColor = `#432e36ff`;
const borderColor = `#5f4842ff`;
const backGroundColor = `#edbfc6`;
const styles = css`color:${darkFontColor};borderColor:${borderColor};margin:10px;fontFamily: Poppins;backgroundColor:${backGroundColor};    `
export default function Farm({ farmID, farmName, farmSuffix, farmLocation }: FarmProps) {
    const complexCalculation = (farmSuffix: string) => { console.log(farmSuffix) }
    const result = useMemo(() => { complexCalculation(``) }, [])
    console.log(result)
    return (
        <>   <Card css={styles}>
            <CardMedia

                sx={{ height: 300, maxHeight: 300 }}
                image="/image_2560x-min 2.jpg"
                title={farmName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" css={{ textTransform: `uppercase`, fontFamily: fonts.primaryFont }} component="div">
                    {farmName}
                </Typography>
                <Typography variant="h6" css={{ color: lighFontColor, fontFamily: fonts.primaryFont }}>
                    Location: {farmLocation}
                </Typography>
                <Typography gutterBottom variant="body2" css={{ color: lighFontColor, fontFamily: fonts.primaryFont }} component="div">
                    Farm Suffix{farmSuffix}
                </Typography>
                <Typography variant="body2" css={{ color: lighFontColor, fontFamily: fonts.primaryFont }} >
                    Farm ID: {farmID}
                </Typography>
            </CardContent>
        </Card ></>
    );
}