import styled from "styled-components";


export const WeatherDisplayWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(to right, #e0eafc, #e0eafc, #cfdef3, #e0eafc);
    font-family: 'Roboto', sans-serif;

    .container {
        background-color: #ffffff7d;
        border-radius: 12px;
        padding: 4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.8);
        background-blend-mode: overlay;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .searchArea {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 10px;

        > input {
            outline: none;
            border: 1px solid grey;
            padding: 10px;
            border-radius: 20px;
            text-align: center;
            width: 80%;
            background: transparent;
            font-size: 18px;
        }

        .searchCircle {
            border: 1px solid grey;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .searchIcon {
                font-size: 25px;
                color: grey;
            }
        }
    }

    .weatherArea {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px 0;

        .weatherIcon {
            padding: 6px;
            font-size: 9rem;
        }

        h1 {
            font-size: 3rem;
        }

        span {
            margin-bottom: 10px;
        }

        h2 {
            font-size: 2rem;
            font-weight: 400;
        }
    }

    .bottomInfoArea {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 10px;
        background: linear-gradient(90deg, rgba(243, 255, 253, 1) 0%, rgba(253, 255, 232, 1) 100%);
        border-radius: 12px;
        padding: 10px;

        .humidityLevel,
        .windSpeed {
            display: flex;
            align-items: center;
            margin: 0 20px;
        }

        .humidityIcon {
            font-size: 3rem;
        }

        .windIcon {
            font-size: 2rem;
            margin-right: 10px;
        }

    }

    .loadingArea {
        height: 400px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        .loadingIcon {
            font-size: 3rem;
            animation: spin 2s linear infinite;
        }

        p {
            font-size: 22px;
            margin-top: 10px;
        }
    }

    /* This creates the spinning animation for the loading icon */
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
