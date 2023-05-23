import styled from 'styled-components';
import respondTo from '../components/Breakpoints';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

// Components
import { CustomLink } from '../components';
import { Box } from '../components/Boxes';
import { H1, P1 } from '../components/Typography';
import { Container, Flex } from '../components/Containers';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="particles"
        options={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
            color: {
              value: '#1263AD',
            },
            line_linked: {
              enable: true,
              color: '#1263AD',
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
          },
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Container>
        <Box width={800} marginTop={150}>
          <H1>Coopa LLC</H1>
          {/* <H1>A Collaborative Agency for UX/UI Design</H1> */}
        </Box>
        {/* <Flex>
							<Box marginTop={60}>
									<H2 id="hero__heading2">Based in...</H2>
							</Box>
									<LocationIcon />
							<Box marginTop={60}>
									<H2 id="hero__location"><ReactRotatingText
											items={['Los Angeles', 'Pittsburgh', 'Amsterdam', 'Boulder', 'Anywhere']}
									/></H2>
							</Box>
					</Flex> */}
        <Box marginTop={60}>
          <P1 id="hero__paragraph1">
            A Collaborative Agency for UX/UI Design. Specializing in custom
            Websites, Web Apps, and Native Applications.
          </P1>
        </Box>
        <Flex>
          <Box marginTop={60} marginRight={30}>
            <CustomLink
              href="https://github.com/ecwireless"
              target="_blank"
              rel="noreferrer"
            >
              <HeroIcon
                style={{ backgroundImage: 'url(./github-logo-invert.png)' }}
              />
            </CustomLink>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

const HeroIcon = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${respondTo.xs`
        width: 40px;
        height: 40px;
    `}

  ${respondTo.sm`
    `}

    ${respondTo.md`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.lg`
    `}
`;

export default Hero;
