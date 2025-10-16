import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  BoltIcon,
  ArrowsPointingOutIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface IconPropsType {
  children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function FeatureFront() {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img
              src="/logo_300.png"
              alt="AtelierDP logo"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
            <Icon>
              <BoltIcon className="h-6 w-6" strokeWidth={2} />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-4">
              Niet-professionele uitdagingen.
            </Typography>
            <Typography variant="lead" className="mb-10 font-normal !text-gray-500" >
                Iedereen zit vol ideeën. Ze uitwerken en tot leven brengen is een volgende stap.
                <br />
                Jezelf uitdagen om telkens nieuwe dingen te leren en te ontdekken is voor mij een vorm van creativiteit. 
                Of het nu gaat om technologie, design, kunst, koken, broodbakken of werken met hout en metaal maakt niet uit.
                Telkens ontdekken wat de limieten zijn en hoe je die kan verleggen is de kunst.
                <br/>
                En die ontdekkingen deel ik hier, omdat kennis delen ook een vorm van creativiteit is.
              <br />
            </Typography>
            <div className="w-max">
                <a href="/over">
                    <Button size="lg" color="white">
                        Meer
                    </Button>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

{/*
    <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
            <Icon>
              <ArrowsPointingOutIcon
                className="h-6 w-6"
                strokeWidth={2}
              />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-4">
              Stand up for every move
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 font-normal !text-gray-500"
            >
              Society has put up so many boundaries, so many limitations on
              what&apos;s right and wrong that it&apos;s almost impossible to
              get a pure thought out.It&apos;s like a little kid, a little boy,
              looking at colors.
              <br />
              <br />
              Before somebody tells you you shouldn&apos;t like pink because
              that&apos;s for girls, or you&apos;d instantly become a gay
              two-year-old. Why would anyone pick blue over pink? Pink is
              obviously a better color.
            </Typography>
            <div className="w-max">
              <Button size="lg" color="white">
                More about us
              </Button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <img
              src="/features4.jpg"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
        </div>
    */}

export default FeatureFront;