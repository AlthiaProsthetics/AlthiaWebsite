import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
// import { IconCheck } from '@tabler/icons-react';
// import image from './image.svg';
import classes from './Mission.module.css';
// import missionPic from '../../assets/IMG_4122.jpg'

export default function Mission() {
  return (
    <Container size="md" id='mission'>
      <div className={classes.inner}>
      <Image src={require("./IMG_4122.jpg")} className={classes.image} style={{maxWidth: '500px', maxHeight: '500px', width: 'auto', height: 'auto', borderRadius: '10px'}}/>
        <div className={classes.content}>
          <Title className={classes.title}>
            Our Mission
          </Title>
          <Text c="dimmed" mt="md">
            Over 600,000 amputees live in pain or discomfort due to an uncomfortable socket. A majority of these amputees simply want a limb that they can comfortably walk in during the day, but the rigidity of current sockets do not allow for an expansion or contraction of the limb, which is often the culprit of discomfort. While some mechanically adjusting sockets do exist, they are tedious to use, and very hard to implement due to complicated methods of tightening and loosening. 
          </Text>
          <Text c="dimmed" mt="md">
            With our automatically adjusting prosthetic socket, we will be able to let amputees focus on doing what they love, and give them their mobility back. 
          </Text>
        </div>
      </div>
    </Container>
  );
}
