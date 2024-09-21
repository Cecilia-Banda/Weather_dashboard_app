import styled from "styled-components";


export const WeatherDisplayWrapper = styled.div`
    background: white;
    font-family: 'Roboto', sans-serif;
    height: 150vh;
    margin: 20px;

    .container {
        background: linear-gradient(90deg, #e8f0f2 0%, #f9f9f9 100%);
        border-radius: 12px;
        padding: 2vh 2vw;
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
        z-index: 999;
        /* add a shadow to the container and background gradient */
        box-shadow: 0 10px 15px rgb(0 0 0 / 50%);

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

    .dropbtn {
        background-color: #073b4c;
        color: white;
        padding: 10px;
        border-radius: 8px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        margin: 30px 20px;
    }

    .weather-detail {
        margin-top: 20px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 20px;
    }

    .weather-detail h3 {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 500;
        padding: 15px;
    }

`;
