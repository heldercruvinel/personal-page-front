import style from "./image-logo.module.scss";

export default function ImageLogo() {

    const strokeWidth = 7;
     
    return (
        <svg className={style.imageLogo} version="1.1" viewBox="-2 -2 200 200" xmlns="http://www.w3.org/2000/svg" >
            <g>
                <g id="toCodeCafeLogo" transform="matrix(0.975 0 0 0.980 .698 .23355)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m176.96 68.755a86.626 125.04 0 0 1-43.600 110.66 86.626 125.04 0 0 1-87.778-0.05258 86.626 125.04 0 0 1-42.682-110.72" strokeWidth={strokeWidth} style={{paintOrder: "fill"}}/>
                    <path d="m62.003 38.972c38.222-4.8604 80.247 0.43665 101.76 12.828 21.515 12.392 16.341 28.51-12.456 38.799-28.797 10.289-73.516 11.998-107.65 4.1132-34.13-7.8845-50.600-23.254-34.701-36.997" strokeWidth={strokeWidth} style={{paintOrder: "fill"}}/>
                    <path d="m163.58 138.91a29.786 27.285 0 0 0 32.475-20.149 29.786 27.285 80.633 0 0-19.085-36.684" strokeWidth={strokeWidth} style={{paintOrder: "fill"}}/>
                    <path d="m168.60 126.09a16.082 15.098 13.264 0 0 15.927-10.017 16.082 15.098 13.264 0 0-6.3628-17.469" strokeWidth={strokeWidth} style={{paintOrder: "fill"}}/>
                    <g strokeWidth={strokeWidth}>
                        <path d="m105.39 127.67v-3.271l33.832 16.181v2.9229l-33.832 16.181v-3.5145l30.454-14.162z" style={{paintOrder: "fill"}}/>
                        <path d="m96.024 112.33h2.7974l-13.723 58.563h-2.7974z" style={{paintOrder: "fill"}}/>
                        <path d="m75.73 127.67-30.454 14.336 30.454 14.162v3.5145l-33.832-16.181v-2.9229l33.832-16.181z" style={{paintOrder: "fill"}}/>
                        <path d="m174.42 67.831c-6.5986-2.1907-16.271-8.8934-28.494-3.1033-12.695 6.0134-26.128-0.94632-31.337-2.109-8.2031-1.8313-14.938 11.667-27.34 8.1336-21.705-6.1844 6.2807-24.533 1.4976-23.924-31.71 4.0404-25.575 15.96-29.155 14.447-7.8208-19.311 17.081-55.049 58.017-50.141-71.299-27.171-110.95 20.904-110.79 65.238" style={{paintOrder: "fill"}}/>
                        <path d="m134.09 15.904s24.075 15.857 24.006 1.5054c-0.0657-13.621-21.902-12.845-24.84-1.9955" style={{paintOrder: "fill"}}/>
                        <path d="m103.92 51.828s14.682 7.5785 16.835 1.0557c2.9875-9.0511-15.075-9.1046-16.814-1.1436" style={{paintOrder: "fill"}}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}