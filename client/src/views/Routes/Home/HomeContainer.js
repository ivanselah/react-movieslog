import axios from "axios";
import React from "react";
import { moviesApi } from "../../../Api";
import HomePresenter from "./HomePresenter";


class HomeContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            popular: null,
            videos: null,
            error: null,
            user : null,
            loading: true,
        };
    }
    componentDidMount = async () => {
        let videos = null;
        let movieId = null;
        try{
            const {data : {results : popular }} = await moviesApi.popular();
            const moviesId = popular.map(movieId => movieId.id)
            while(true){
                movieId = moviesId[Math.floor(Math.random() * 10)];
                if(movieId){
                    ({ data : { videos : { results : videos }}}= await moviesApi.movieDetail(movieId));
                    if (videos.length === 0){
                        continue;
                    } else {
                        break;
                    }
                }
            }
        this.setState({
            popular,
        });
        }catch{
            this.setState({
                error: "Can't find movies informaion."
            })
        }finally{
            this.setState({loading: false, videos})
        }
    }
    render() {
        const { user } = this.props;
        const { popular, videos, error, loading } 
        = this.state;
        return (
            <HomePresenter 
            popular = {popular} 
            videos = {videos}
            user = {user}
            error = {error}
            loading = {loading}
            />
        );
    }
}

export default HomeContainer;