'use client'
interface cardProps{
    heading: string
    paragraph: string
    bgColor: string
    box: string
    fixedLine: string
    // id: string
}
const Card =  (props : cardProps ) => {
    const { heading, paragraph, bgColor, box, fixedLine } = props
    return(
        <div className= {'flex flex-col w-80 gap-2 bg-[${bgColor}] Card'}>
            <div className="bg-[box] rounded-[10px] px-[19px] py-[22px]"></div>
            <h3>{heading}</h3>
            <div className= {'h-[2px] w-[50px] bg-[${fixedLine}] '}></div>
            <p>{paragraph}</p>
        </div>
    )
}
export default Card;