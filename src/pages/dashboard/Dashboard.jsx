import React, { useEffect, useState } from "react";
import styles from "./DashBoard.module.css";
import UserWidget from "../../components/UserWidget";
import NotesWidget from "../../components/NotesWidget";
import CountDownWidget from "../../components/CountDownWidget";
import NewsWidget from "../../components/NewsWidget";
import WeatherWidget from "../../components/WeatherWidget";
import { fetchNewsData } from "../../apis/news";
import { fetchWeatherData } from "../../apis/weather";
import { useNavigate } from "react-router-dom";
function Dashboard() {
	const navigate = useNavigate() ;
	const [user, setUser] = useState();
	const [selectedGenres, setSelectedGenres] = useState();
    const [weather, setWeather] = useState();
    const [news, setNews] = useState();

	useEffect(() => {
		setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
		setUser(JSON.parse(localStorage.getItem("UserInfo")));
        fetchWeatherData().then((data) => {
        	setWeather(data);
            console.log(data)
        });
        fetchNewsData().then((data) => {
        	setNews(data);
        });
	}, []);

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.UserWidget}>
					{user && selectedGenres && (
						<UserWidget
							user={user}
							selectedGenres={selectedGenres}
							type={"small"}
						/>
					)}
				</div>
				<div className={styles.WeatherWidget}>
                    {weather && <WeatherWidget weather={weather} type='small' />}
                </div>
				<div className={styles.TimerWidget}>
					<CountDownWidget />
				</div>
				<div className={styles.NotesWidget}>
					<NotesWidget />
				</div>
				<div className={styles.NewsWidget}>
                    {news && <NewsWidget news={news} />}
                </div>
                
			</div>
            <button className={styles.button} onClick={() => navigate('/promotion')} >Browse</button>
		</div>
	);
}

export default Dashboard;
