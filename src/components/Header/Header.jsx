import { Menu, Group, Center, Burger, Container, Text, Button, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'Features' },
  {
    link: '#1',
    label: 'Learn',
    links: [
      { link: '/docs', label: 'Documentation' },
      { link: '/resources', label: 'Resources' },
      { link: '/community', label: 'Community' },
      { link: '/blog', label: 'Blog' },
    ],
  },
  { link: '/about', label: 'About' },
  { link: '/pricing', label: 'Pricing' },
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    // <div className="header">
    <header className={classes.header}>
      <Container size='md' className={classes.inner}>
      <div>
        <Text>Althia Prosthetics</Text>
      </div>

      <Group gap={5} visibleFrom="xs">
          <Button onClick={() => {scrollToSection('home')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Home</Button>
          <Button onClick={() => {scrollToSection('mission')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Mission</Button>
      </Group>
      </Container>
      <Divider size='xs'/>
    </header>
      // <Container size="md" className="header" >
     

      // </Container>
    // </div> 
  )
}

// const [opened, { toggle }] = useDisclosure(false);

// const items = links.map((link) => {
//   const menuItems = link.links?.map((item) => (
//     <Menu.Item key={item.link}>{item.label}</Menu.Item>
//   ));

//   if (menuItems) {
//     return (
//       <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
//         <Menu.Target>
//           <a
//             href={link.link}
//             className={classes.link}
//             onClick={(event) => event.preventDefault()}
//           >
//             <Center>
//               <span className={classes.linkLabel}>{link.label}</span>
//               <IconChevronDown size="0.9rem" stroke={1.5} />
//             </Center>
//           </a>
//         </Menu.Target>
//         <Menu.Dropdown>{menuItems}</Menu.Dropdown>
//       </Menu>
//     );
//   }

//   return (
//     <a
//       key={link.label}
//       href={link.link}
//       className={classes.link}
//       onClick={(event) => event.preventDefault()}
//     >
//       {link.label}
//     </a>
//   );
// });

// return (
//   <header className={classes.header}>
//     <Container size="md">
//       <div className={classes.inner}>
//         {/* <MantineLogo size={28} /> */}
//         <Group gap={5} visibleFrom="sm">
//           {items}
//         </Group>
//         <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
//       </div>
//     </Container>
//   </header>
// );
