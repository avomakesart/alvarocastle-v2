import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Grid } from '../components/Grid/Grid';
import {NavBar} from '../components';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [headingColor, setHeadingColor] = useState('text-black')
  const [count, setCount] = useState(0)

  useEffect(() => {
    
    const timer = setInterval(() => {
      setHeadingColor('text-yellow-500')
      setCount(count + 1)
    }, 1000)

    return () => {
      clearInterval(timer),
      setHeadingColor('text-black')}
  }, [headingColor, count])

  console.log(headingColor);
  


  return (
    <>
      <NavBar />
      <div className='container flex flex-col m-20'>
        <h1>Alvaro Castillo is a <span className={headingColor}>product focused</span>Software Engineer</h1>
        <span>{count}</span>
        <div className='flex flex-col'>
          <h5 className='mr-4'>Buttons</h5>
          <Button type='button' btnType='primary'>
            Hello world
          </Button>
          <br />
          <Button type='button' btnType='secondary'>
            Hello world
          </Button>
          <br />
          <h5>Grid</h5>
          <Grid smCols='1' mdCols='2' lgCols='3' xlCols='5' xxlCols='7'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Grid>
          <br />
          <h5>Cards</h5>
        </div>
      </div>
    </>
  );
};
export default Home;
