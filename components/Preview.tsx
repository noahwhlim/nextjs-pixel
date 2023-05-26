'use client';

import { useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import { Radio } from "@nextui-org/react";



const Preview = () => {

    const [color, setColor] = useState("Black");


    const getImage = (): JSX.Element => {
        if (color === "Black") {
            return (
                    <Image src="/images/black-back.png" alt="black-back" width={500} height={500}/>
            )
        }
        if (color === "Green") {
            return (
                    <Image src="/images/green-back.png" alt="green-back" width={500} height={500}/>
            )
        }
        if (color === "White") {
            return (
                    <Image src="/images/white-back.png" alt="white-back" width={500} height={500}/>
            )
        }
        return (
            <p>Error</p>
        )
    }

    return (
        <div className="px-8 pt-4">
            <div className="text-black flex items-center content-center align-middle ">
                <div className="text-black text-6xl font-bold float-left font-sans">
                    Simply. Powerful.
                </div>

                <div className="text-black ml-auto flex flex-row">
                        <p className="px-2 font-bold text-xl ">{color}</p>

                    {/* <form className="px-2 flex justify-center items-center">
                        <input id="black" name="color" type="radio" className="mr-3" defaultChecked={true} onClick={() => setColor("Black")}/>
                        <input id="green" name="color" type="radio" className="mr-3" onClick={() => setColor("Green")}/>
                        <input id="white" name="color" type="radio" className="mr-3" onClick={() => setColor("White")}/>
                    </form> */}
                    <div className="flex items-center">
                        <Radio.Group orientation="horizontal" defaultValue="Black" value={color} onChange={setColor}>
                            <Radio value="Black" size="sm" onClick={() => setColor("Black")} ></Radio>
                            <Radio value="Green" size="sm" onClick={() => setColor("Green")} ></Radio>
                            <Radio value="White" size="sm" onClick={() => setColor("White")} ></Radio>
                        </Radio.Group>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                {getImage()}
            </div>
        </div>
  );
};

export default Preview;