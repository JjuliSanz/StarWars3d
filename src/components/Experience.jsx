import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Euler, Group, Vector3 } from "three";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";
import { Background } from "./Background";
import { TextSection } from "./TextSection";
import { usePlay } from "../context/Play";
import { JediFighter } from "./JediFighter";
import { Asteroid } from "./Asteroid_01";
import { Orbit } from "./Ep1/Star_wars_orbit";
import { NabooStarfighter } from "./Ep1/NabooStarfighter";
import { DookuShip } from "./Ep2/DookuShip";
import { JangoFett } from "./Ep2/Jango_fett";
import { GrievousShip } from "./Ep3/GrievousShip";
import { ObiShip } from "./Ep3/ObiWan_ship";
import { Coruscant } from "./Ep3/Coruscant";
import { Tatooine } from "./Ep1/Tatooine";
import { TantiveIV } from "./Ep4/TantiveIV";
import { DeathStar } from "./Ep4/DeathStar";
import { HalconMilenario } from "./Ep5/HalconMilenario";
import { BattleHoth } from "./Ep5/BattleHoth";
import { DarthVader } from "./Ep6/Darth_vader";
import { Emperor } from "./Ep6/Emperor";
import { Speeder } from "./Ep6/Speeder";
import { StarKiller } from "./Ep7/StarKiller";
import { Ep7Battle } from "./Ep7/Ep7Battle";
import { PoeXwing } from "./Ep8/Poe_x-wing";
import { Dreadnought } from "./Ep8/Dreadnought";
import { Exegol } from "./Ep9/Exegol_descent";
import { ReyLightsaber } from "./Ep9/ReyLightsaber";
import { Speed } from "./Speed";

// Constants for the number of points in the line, distances, angles, and friction
const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_ship = 0.02;
const ship_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

export const Experience = () => {
  const [speed, setSpeed] = useState(false)

  // Memoized points for creating a Catmull-Rom curve
  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(50, 0, -7 * CURVE_DISTANCE),
      new THREE.Vector3(-50, 0, -8 * CURVE_DISTANCE),
      new THREE.Vector3(150, 0, -9 * CURVE_DISTANCE),
      new THREE.Vector3(-150, 0, -10 * CURVE_DISTANCE),
    ],
    []
  );

  const sceneOpacity = useRef(0);
  const lineMaterialRef = useRef();

  // Memoized curve created using Catmull-Rom interpolation
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  // Memoized text sections containing position, titles, and subtitles
  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
        title: "EPISODE I",
        subtitle: `The Phantom Menace`,
        releaseDate: `May 19, 1999`,
      },
      {
        cameraRailDist: 1.5,
        position: new Vector3(
          curvePoints[2].x + 2.5,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "EPISODE II",
        subtitle: `Attack of the Clones`,
        releaseDate: `May 16, 2002`,
      },
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "EPISODE III",
        subtitle: `Revenge Of The Sith`,
        releaseDate: `May 19, 2005`,
      },
      {
        cameraRailDist: 1.5,
        position: new Vector3(
          curvePoints[4].x + 4,
          curvePoints[4].y,
          curvePoints[4].z - 12
        ),
        title: "EPISODE IV",
        subtitle: `A New Hope`,
        releaseDate: `May 25, 1977`,
      },
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[5].x - 4.5,
          curvePoints[5].y,
          curvePoints[5].z - 12
        ),
        title: "EPISODE V",
        subtitle: `The Empire Strikes Back`,
        releaseDate: `May 21, 1980`,
      },
      {
        cameraRailDist: 1.5,
        position: new Vector3(
          curvePoints[6].x + 4,
          curvePoints[6].y,
          curvePoints[6].z - 12
        ),
        title: "EPISODE VI",
        subtitle: `Return Of The Jedi`,
        releaseDate: `May 25, 1983`,
      },
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[7].x - 4.5,
          curvePoints[7].y,
          curvePoints[7].z - 12
        ),
        title: "EPISODE VII",
        subtitle: `The Force Awakens`,
        releaseDate: `December 18, 2015`,
      },
      {
        cameraRailDist: 1.5,
        position: new Vector3(
          curvePoints[8].x + 6,
          curvePoints[8].y,
          curvePoints[8].z - 12
        ),
        title: "EPISODE VIII",
        subtitle: `The Last Jedi`,
        releaseDate: `December 15, 2017`,
      },
      {
        cameraRailDist: -1,
        position: new Vector3(
          curvePoints[9].x - 6.5,
          curvePoints[9].y,
          curvePoints[9].z - 12
        ),
        title: "EPISODE IX",
        subtitle: `The Rise Of Skywalker`,
        releaseDate: `December 20, 2019`,
      },
    ];
  }, []);

  // Memoized asteroids with positions, scales, and rotations
  const asteroids = useMemo(
    () => [
      // STARTING
      {
        scale: new Vector3(0.5, 0.5, 0.5),
        position: new Vector3(-5, -2, -7),
      },
      {
        scale: new Vector3(0.5, 0.5, 0.5),
        position: new Vector3(6, -1, -10),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(-18, -4, -58),
        rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new Vector3(1.5, 1.5, 1.5),
        position: new Vector3(13, -0.2, -52),
      },
      // FIRST POINT
      {
        scale: new Vector3(1, 1, 1),
        position: new Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new Euler(0, Math.PI / 7, 0),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[1].x - 15,
          curvePoints[1].y + -4,
          curvePoints[1].z + 70
        ),
        rotation: new Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[1].x + 46,
          curvePoints[1].y + -10,
          curvePoints[1].z - 72
        ),
      },
      // SECOND POINT
      {
        scale: new Vector3(1, 1, 1),
        position: new Vector3(
          curvePoints[2].x + 25,
          curvePoints[2].y - 5,
          curvePoints[2].z + 55
        ),
      },
      {
        scale: new Vector3(1, 1, 1),
        position: new Vector3(
          curvePoints[2].x + 25,
          curvePoints[2].y - 5,
          curvePoints[2].z + 35
        ),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[2].x + 30,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      // THIRD POINT
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(1.7, 1.7, 1.7),
        position: new Vector3(
          curvePoints[3].x - 5,
          curvePoints[3].y - 7,
          curvePoints[3].z + 50
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      // FOURTH POINT
      // {
      //   scale: new Vector3(2, 2, 2),
      //   position: new Vector3(
      //     curvePoints[4].x + 3,
      //     curvePoints[4].y - 10,
      //     curvePoints[4].z + 2
      //   ),
      // },
      // {
      //   scale: new Vector3(2, 2, 2),
      //   position: new Vector3(
      //     curvePoints[4].x + 20,
      //     curvePoints[4].y - 0,
      //     curvePoints[4].z + 2
      //   ),
      // },
      // {
      //   scale: new Vector3(1, 1, 1),
      //   position: new Vector3(
      //     curvePoints[4].x + 34,
      //     curvePoints[4].y - 6,
      //     curvePoints[4].z - 42
      //   ),
      //   rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      // },
      // {
      //   scale: new Vector3(3, 3, 3),
      //   position: new Vector3(
      //     curvePoints[4].x + 10,
      //     curvePoints[4].y + 9,
      //     curvePoints[4].z - 62
      //   ),
      //   rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
      // },
      // FINAL
      // {
      //   scale: new Vector3(3, 3, 3),
      //   position: new Vector3(
      //     curvePoints[7].x + 12,
      //     curvePoints[7].y - 5,
      //     curvePoints[7].z + 60
      //   ),
      //   rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
      // },
      // {
      //   scale: new Vector3(3, 3, 3),
      //   position: new Vector3(
      //     curvePoints[7].x - 12,
      //     curvePoints[7].y + 5,
      //     curvePoints[7].z + 120
      //   ),
      //   rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
      // },
    ],
    []
  );

  // Memoized shape for creating the extruded line
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const camera = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  const { play, setEnd, end, setHasScroll } = usePlay();

  // Logic for updating the scene based on scroll offset and animation progress
  useFrame((_state, delta) => {
    // Update camera position and orientation based on window dimensions (landscape or portrait mode)
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE mode: Adjust camera field of view and position for wider view
      camera.current.fov = 30;
      camera.current.position.z = 5;
    } else {
      // PORTRAIT mode: Adjust camera field of view and position for narrower view
      camera.current.fov = 80;
      camera.current.position.z = 2;
    }

    // Check if the user has scrolled down and set a flag indicating the presence of scroll
    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    // Interpolate scene opacity for smooth fadeIn effect when the experience starts
    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    // Interpolate scene opacity for smooth fadeOut effect when the experience ends
    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    // Update line material opacity based on scene opacity
    lineMaterialRef.current.opacity = sceneOpacity.current;

    if (end) {
      return;
    }

    // Calculate scroll offset and ensure it's non-negative
    const scrollOffset = Math.max(0, scroll.offset);

    // Initialize friction and flag to reset camera rail position
    let friction = 1;
    let resetCameraRail = true;

    // Iterate through textSections to determine friction and adjust camera rail position
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      // If camera is close to a text section, reduce friction and adjust camera rail position
      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);

        // Calculate target position for camera rail based on distance
        const targetCameraRailPosition = new Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );

        // Interpolate camera rail position towards the target
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });

    // Reset camera rail position if no text section is close enough
    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // Interpolate scroll offset to create smooth scrolling effect with friction
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );

    // Ensure lerpedScrollOffset is within [0, 1] range
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    // Update the last scroll offset for future calculations
    lastScroll.current = lerpedScrollOffset;

    // Seek the timeline to the interpolated scroll offset to control animations
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    // Get the current point on the curve based on the lerped scroll offset
    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Interpolate camera position towards the current point on the curve
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Calculate a point ahead on the curve for the camera to look at
    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    // Calculate current and target look-at vectors and interpolate between them
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);

    // Set the camera's look-at direction to create a smooth lookahead effect
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // ship rotation

    // Get the tangent of the curve at the lerped scroll offset
    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_ship);

    // Create a temporary non-lerped look-at group for orientation calculations
    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    // Apply rotation to the tangent based on the non-lerped look-at rotation
    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    // Calculate rotation angles for the ship based on the tangent
    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    // Convert angles from radians to degrees and apply a multiplier for a stronger angle
    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // Limit the ship's rotation angle within specified bounds
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -ship_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, ship_MAX_ANGLE);
    }

    // Convert the angle back to radians for quaternion rotation
    angle = (angleDegrees * Math.PI) / 180;

    // Create a target quaternion based on the calculated angles for the ship rotation
    const targetshipQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        ship.current.rotation.x,
        ship.current.rotation.y,
        angle
      )
    );

    // Use slerp to smoothly interpolate the ship's quaternion towards the target quaternion
    ship.current.quaternion.slerp(targetshipQuaternion, delta * 2);

    // Check if the camera is close to the end of the curve, trigger end state and play exit animation
    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 100
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }

    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 200
    ) {
      setSpeed(true);      
    }
  });

  // Create a ref to hold the ship model
  const ship = useRef();

  // Create refs for timelines and background color transitions
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#15152b",
    colorB: "#3c3875",
  });

  // TIMELINE
  // Create refs for ship animations when entering and exiting the scene
  const planeInTl = useRef();
  const planeOutTl = useRef();

  // useEffect with useLayoutEffect to set up timelines and animations on component layout
  useLayoutEffect(() => {
    // Initialize a main timeline for background color transitions
    tl.current = gsap.timeline();

    // Define background color transitions at different durations and color values
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#15152b",
      colorB: "#e3aa54",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#15152b",
      colorB: "#9c331c",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#15152b",
      colorB: "#78a2cf",
    });
    tl.current.to(backgroundColors.current, {
      duration: 0.5,
      colorA: "#15152b",
      colorB: "#298a3e",
    });
    tl.current.to(backgroundColors.current, {
      duration: 2,
      colorA: "#15152b",
      colorB: "#bfb03f",
    });

    // Pause the main timeline initially
    tl.current.pause();

    // Initialize ship entrance animation timeline
    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();

    // Animate the ship's position when entering the scene
    planeInTl.current.from(ship.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    // Initialize ship exit animation timeline
    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    // Animate the ship's position and camera rail position when exiting the scene
    planeOutTl.current.to(
      ship.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    planeOutTl.current.to(ship.current.position, {
      duration: 1,
      z: -1000,
    });
  }, []);

  // useEffect to trigger ship entrance animation when 'play' state changes
  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  // Render the 3D scene with lights, camera, text, line, asteroids, and animations
  return useMemo(
    () => (
      <>
        {speed && <Speed />}

        <directionalLight position={[-1.7, 2, -3]} intensity={0.5} />
        <group ref={cameraGroup}>
          <Background backgroundColors={backgroundColors} />
          <group ref={cameraRail}>
            <PerspectiveCamera
              ref={camera}
              position={[0, 0, 5]}
              fov={30}
              makeDefault
            />
          </group>
          <group ref={ship}>
            <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
              <JediFighter
                scale={0.003}
                rotation-y={3.15}
                rotation-x={0.15}
                position-y={-0.5}
                position-x={0}
              />
            </Float>
          </group>
        </group>

        {/* TEXT */}
        {textSections.map((textSection, index) => (
          <>
            <TextSection {...textSection} key={index} />
            {/* EPISODE 1 */}
            {index === 0 && (
              <>
                <Orbit
                  scale={0.25}
                  position={
                    new Vector3(
                      curvePoints[1].x - 4,
                      curvePoints[1].y - 1,
                      curvePoints[1].z
                    )
                  }
                  rotation={[0, 3.5, 0]}
                />
                <NabooStarfighter
                  scale={0.0016}
                  position={
                    new Vector3(
                      curvePoints[1].x - 1.6,
                      curvePoints[1].y - 1,
                      curvePoints[1].z
                    )
                  }
                  rotation={[0, -1, -0.5]}
                />
                <Tatooine
                  scale={2}
                  position={
                    new Vector3(
                      curvePoints[1].x - 10,
                      curvePoints[1].y + 4,
                      curvePoints[1].z - 0
                    )
                  }
                />
              </>
            )}
            {/* EPISODE 2 */}
            {index === 1 && (
              <>
                {/* <Clone
                  scale={0.5}
                  position={
                    new Vector3(
                      curvePoints[2].x + 2,
                      curvePoints[2].y - 1,
                      curvePoints[2].z
                    )
                  }
                  rotation={[0, -1, -0.5]}
                /> */}
                <JangoFett
                  scale={1.3}
                  position={
                    new Vector3(
                      curvePoints[2].x + 1.5,
                      curvePoints[2].y - 3,
                      curvePoints[2].z
                    )
                  }
                  rotation={[0, -0.5, 0]}
                />
                <DookuShip
                  scale={0.5}
                  position={
                    new Vector3(
                      curvePoints[2].x + 1.2,
                      curvePoints[2].y + 3,
                      curvePoints[2].z
                    )
                  }
                  rotation={[116, 0, 90]}
                />
              </>
            )}
            {/* EPISODE 3 */}
            {index === 2 && (
              <>
                <ObiShip
                  scale={0.2}
                  position={
                    new Vector3(
                      curvePoints[3].x - 2,
                      curvePoints[3].y - 2.5,
                      curvePoints[3].z
                    )
                  }
                  rotation={[0.2, -0.6, 0]}
                />

                <GrievousShip
                  scale={0.1}
                  position={
                    new Vector3(
                      curvePoints[3].x - 5,
                      curvePoints[3].y - 2.4,
                      curvePoints[3].z
                    )
                  }
                  rotation={[-1.6, -0, -0.2]}
                />
                <Coruscant
                  scale={0.03}
                  position={
                    new Vector3(
                      curvePoints[3].x - 20,
                      curvePoints[3].y - 10,
                      curvePoints[3].z - 8
                    )
                  }
                />
              </>
            )}
            {/* EPISODE 4 */}
            {index === 3 && (
              <>
                <TantiveIV
                  scale={0.08}
                  position={
                    new Vector3(
                      curvePoints[4].x + 2,
                      curvePoints[4].y - 4,
                      curvePoints[4].z - 12
                    )
                  }
                  rotation={[0, -0.6, 0]}
                />
                <DeathStar
                  scale={0.03}
                  position={
                    new Vector3(
                      curvePoints[4].x + 8,
                      curvePoints[4].y - 2,
                      curvePoints[4].z - 12
                    )
                  }
                  rotation={[0, -0.5, 0]}
                />
              </>
            )}
            {/* EPISODE 5 */}
            {index === 4 && (
              <>
                <BattleHoth
                  scale={1.5}
                  position={
                    new Vector3(
                      curvePoints[5].x - 5.5,
                      curvePoints[5].y - 2.3,
                      curvePoints[5].z - 12
                    )
                  }
                  rotation={[0, -1, -0.1]}
                />
                <HalconMilenario
                  scale={0.002}
                  position={
                    new Vector3(
                      curvePoints[5].x - 6.5,
                      curvePoints[5].y - 1,
                      curvePoints[5].z - 12
                    )
                  }
                  rotation={[0, -0.5, -0.5]}
                />
              </>
            )}
            {/* EPISODE 6 */}
            {index === 5 && (
              <>
                <Emperor
                  scale={1}
                  position={
                    new Vector3(
                      curvePoints[6].x - 10,
                      curvePoints[6].y - 6.5,
                      curvePoints[6].z - 1
                    )
                  }
                  rotation={[0, 0, 0]}
                />
                <Speeder
                  scale={1}
                  position={
                    new Vector3(
                      curvePoints[6].x + 8,
                      curvePoints[6].y - 3,
                      curvePoints[6].z - 12
                    )
                  }
                  rotation={[0, 0.5, 0]}
                />
                <DarthVader
                  scale={0.003}
                  position={
                    new Vector3(
                      curvePoints[6].x + 6,
                      curvePoints[6].y - 3,
                      curvePoints[6].z - 16
                    )
                  }
                  rotation={[0, -0.3, 0]}
                />
              </>
            )}
            {/* EPISODE 7 */}
            {index === 6 && (
              <>
                <StarKiller
                  scale={0.03}
                  position={
                    new Vector3(
                      curvePoints[7].x + 4,
                      curvePoints[7].y,
                      curvePoints[7].z - 12
                    )
                  }
                  rotation={[0, 0.3, 0.7]}
                />
                <Ep7Battle
                  scale={0.003}
                  position={
                    new Vector3(
                      curvePoints[7].x - 10.5,
                      curvePoints[7].y - 12,
                      curvePoints[7].z - 10
                    )
                  }
                  rotation={[0, -0.6, -0.1]}
                />
              </>
            )}
            {/* EPISODE 8 */}
            {index === 7 && (
              <>
                <Dreadnought
                  scale={0.4}
                  position={
                    new Vector3(
                      curvePoints[8].x + 9,
                      curvePoints[8].y - 1.5,
                      curvePoints[8].z - 10
                    )
                  }
                  rotation={[0, -1.2, 0]}
                />
                <PoeXwing
                  scale={0.003}
                  position={
                    new Vector3(
                      curvePoints[8].x + 5,
                      curvePoints[8].y - 1,
                      curvePoints[8].z - 10
                    )
                  }
                  rotation={[0.2, 1.3, 0]}
                />
              </>
            )}
            {/* EPISODE 9 */}
            {index === 8 && (
              <>
                <ReyLightsaber
                  scale={0.09}
                  position={
                    new Vector3(
                      curvePoints[9].x - 6.5,
                      curvePoints[9].y - 1,
                      curvePoints[9].z - 12
                    )
                  }
                  rotation={[0, -1.2, 0]}
                />
                <Exegol
                  scale={0.04}
                  position={
                    new Vector3(
                      curvePoints[9].x - 6.5,
                      curvePoints[9].y - 4,
                      curvePoints[9].z - 12
                    )
                  }
                  rotation={[0, 0.4, 0]}
                />
              </>
            )}
          </>
        ))}

        {/* LINE */}
        <group position-y={-2}>
          <mesh>
            <extrudeGeometry
              args={[
                shape,
                {
                  steps: LINE_NB_POINTS,
                  bevelEnabled: false,
                  extrudePath: curve,
                },
              ]}
            />
            <meshStandardMaterial
              color={"white"}
              ref={lineMaterialRef}
              transparent
              envMapIntensity={2}
              onBeforeCompile={fadeOnBeforeCompile}
            />
          </mesh>
        </group>

        {/* ASTEROIDS */}
        {asteroids.map((asteroid, index) => (
          <Float floatIntensity={1} speed={0.5} rotationIntensity={0.1}>
            <Asteroid {...asteroid} sceneOpacity={sceneOpacity} key={index} />
          </Float>
        ))}
      </>
    ),
    []
  );
};
