import { Card } from 'flowbite-react';


const Doctor = () => {
    return (
        <Card renderImage={() => {<img width={500} height={500} src='https://s3-alpha-sig.figma.com/img/bc90/b99b/d51ade374cf8ab0c0d8f733359205389?Expires=1697414400&Signature=TXSOAHsu6bJDrTz5gobTd~LaIJ~NJoPyFSAx0PoWFwucc~xJAuQeXghHMnxLV3mjduGH5EqAbGFZkSlqOfGOoShPV3~VKWxMElkshfdn3nrL36Fx8FvCbB1tn7gOjjfyEPHLKee~~cmXbXgmD8lqjjIV7Vo1RgejbaDPylP~VvFPazAe6pgQF7wDsIaebC9ziJA9I0M04kIx74255llvKTtY0xLTpRMoDSzPy5i1rw02l2~RS8rn2IOLMDCOTD8E70a6qTmyl8kkgsE1zuIihiqstw3tR6kNKb5aTPGMBXlKeo7OPOjp5LJONCPFRZKE5TPhJo1QIP88dzHjvA9Mqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />}}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    );
};

export default Doctor;