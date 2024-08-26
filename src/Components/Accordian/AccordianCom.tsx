import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useState } from "react"

export default function AccordionUsage() {
  const [menArrowIcon, setMenArrowIcon] = useState(false)
  const handleMenArrowIcon = () => setMenArrowIcon(!menArrowIcon)
  const [womenArrowIcon, setWomenArrowIcon] = useState(false)
  const handleWomenArrowIcon = () => setWomenArrowIcon(!womenArrowIcon)

  return (
    <div>
      <Accordion>
        <AccordionSummary
          onClick={() => {
            handleMenArrowIcon()
          }}
          className='md:ml-10 text-[#495057] font-bold mt-3 ml-3'
          aria-controls='panel1-content'>
          <div className='md:ml-6 ml-1'>
            Women's Fashion
            {menArrowIcon ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className='m-0 ml-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          onClick={() => {
            handleWomenArrowIcon()
          }}
          className='md:ml-10 text-[#495057] font-bold mt-3 ml-3'
          aria-controls='panel2-content'>
          <div className='md:ml-6 ml-1'>
            Men's Fashion
            {womenArrowIcon ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className='m-0 ml-6'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
