import { motion } from 'framer-motion';
const slideFromTop = {
    hidden: { opacity: 0, y: '-300%', transition: { duration: 1 } },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function AboutUs() {
    return (
        <motion.g
            initial="hidden"
            animate="visible"
            height="auto"
            variants={slideFromTop}
            transition={{ ease: 'ease' }}
        >
            <g id="freepik--Floor--inject-8">
                <ellipse
                    id="freepik--floor--inject-8"
                    cx="244.99"
                    cy="349.69"
                    rx="225.05"
                    ry="129.93"
                    style={{ fill: '#f5f5f5' }}
                ></ellipse>
            </g>
            <g id="freepik--Shadows--inject-8">
                <ellipse
                    id="freepik--Shadow--inject-8"
                    cx="283.51"
                    cy="397.24"
                    rx="41.38"
                    ry="23.89"
                    style={{ fill: '#e0e0e0' }}
                ></ellipse>
                <ellipse
                    id="freepik--shadow--inject-8"
                    cx="391.16"
                    cy="383.09"
                    rx="41.38"
                    ry="23.89"
                    style={{ fill: '#e0e0e0' }}
                ></ellipse>
                <ellipse
                    id="freepik--shadow--inject-8"
                    cx="164.82"
                    cy="433.06"
                    rx="41.38"
                    ry="23.89"
                    style={{ fill: '#e0e0e0' }}
                ></ellipse>
            </g>
            <g id="freepik--Plants--inject-8">
                <g id="freepik--plants--inject-8">
                    <path
                        d="M97,354.5s-1.08-25.26-11.67-39.32-23.57-16.08-30-12.12c-4.7,2.88-4.07,11.44,4.06,17s23.8,19.81,26.25,29.1Z"
                        style={{ fill: '#37474f' }}
                    ></path>
                    <path
                        d="M90,350.82a.66.66,0,0,1-.61-.69c1.09-22.92-19-37.21-24.47-39.78a.66.66,0,0,1-.32-.87.67.67,0,0,1,.88-.32c5.61,2.66,26.34,17.39,25.22,41a.66.66,0,0,1-.69.62Z"
                        style={{ fill: '#fff' }}
                    ></path>
                    <path
                        d="M92,346.52A6,6,0,0,1,88.09,345c-1.23-1.35-1.13-3.42-1.7-5.16-.93-2.86-3.75-4.8-6.69-5.41a20.31,20.31,0,0,0-8.92.6c-5.9,1.45-11.57-2.18-17.48-1.75a11.78,11.78,0,0,0-6,1.87,6.38,6.38,0,0,0-2.86,5.36A6.84,6.84,0,0,0,46.88,345a20.54,20.54,0,0,0,4.48,2.8l5.19,2.65A9.15,9.15,0,0,1,59,352.05a6.91,6.91,0,0,1,1.81,5.53c-.4,2-2,3.52-2.51,5.48-.63,2.57.94,5.32,3.2,6.71a13.1,13.1,0,0,0,7.68,1.5c2.65-.15,5.27-.68,7.92-.73a9.33,9.33,0,0,1,5.16,1.13,9.57,9.57,0,0,1,3.63,5.27,14,14,0,0,0,1.62,3.86A7.47,7.47,0,0,0,91,383.25a11.94,11.94,0,0,0,8.25,0c2.19-.84,3.26-3.31,4.08-5.45a19,19,0,0,0,1.15-7,44.71,44.71,0,0,0-4.07-17.74c-1.23-2.56-3-5.12-5.72-6A17.25,17.25,0,0,0,92,346.52Z"
                        style={{ fill: '#455a64' }}
                    ></path>
                    <path
                        d="M97.68,374a.58.58,0,0,1-.55-.39c-6.17-17.69-35.36-33.08-46-34.85a.58.58,0,1,1,.19-1.15c10.88,1.8,40.65,17.53,47,35.61a.58.58,0,0,1-.36.75A.63.63,0,0,1,97.68,374Z"
                        style={{ fill: '#fff' }}
                    ></path>
                    <path
                        d="M71.44,364.3a.58.58,0,0,1-.35-1,29.36,29.36,0,0,1,16.22-5.21h0a.59.59,0,0,1,0,1.17,28.79,28.79,0,0,0-15.53,5A.6.6,0,0,1,71.44,364.3Z"
                        style={{ fill: '#fff' }}
                    ></path>
                </g>
            </g>
        </motion.g>
    );
}
