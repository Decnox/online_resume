import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import normaal from "@/assets/Normaal.png"

export default function Experiences({company, date, skills, img}){
  return(
    <Box key={company} class="flex flex-row flex-wrap justify-center w-full">
      <div class="w-1/2">
        <Typography class="text-6xl">{company}</Typography>
        <Typography class="text-2xl">{date}</Typography>
        <div class="flex flex-row flex-wrap ">
          {skills.map(skill => 
          <Card class="flex flex-row flex-wrap w-1/4 rounded-2xl m-1">
            <CardContent>
              <span class="text-gray-500">
                {skill}
              </span>
            </CardContent>
          </Card>
        )}
        <img src={normaal} alt='Toto'/>
        </div>
      </div>
    </Box>
  )
}

