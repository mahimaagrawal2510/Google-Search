import React, { useState, useEffect } from 'react';
import { getData } from "../../Utilities/utilities";
import SearchedImages from "../../components/SearchedImages/SearchedImages";
import Loader from '../../components/Loader/Loader';
import ImagePopOver from '../../components/ImagePopOver/ImagePopOver';
import Header from "../../components/Header/Header";
import { API_URL, LIMIT } from '../../Utilities/constants';

const SearchList = () => {

    const [searchResultsArr, setSearchResultsArr] = useState([]);
    const [selectedImage, setSelectedImage] = useState({});
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [isActive, setIsActive] = useState(false);
    
    const handlePopImage = (image) => {
        getData(`${API_URL}/id/${image.id}/info`, {}, (res) => {
            setIsActive(true);
            setSelectedImage(image);
        });
    };

    const removeImagePopOver = () => {
        setSelectedImage({});
        setIsActive(false);
    }

    useEffect(() => {
        const fetchImages = () => {
            setIsLoading(true);
            getData(`${API_URL}/v2/list?page=${page}&limit=${LIMIT}`, {}, (res) => {
                if (res.length === 0) {
                    setHasMore(false);
                } else {
                    setSearchResultsArr((prev) => [...prev, ...res]);
                }
                setIsLoading(false);
            });
        };

        fetchImages();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 &&
                !isLoading && hasMore
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, hasMore]);

    return (
        <div>
            <Header />
            <div className='flex gap-4 relative flex-col-reverse md:flex-row'>
                {
                    searchResultsArr?.length > 0 &&
                    <SearchedImages isActive={isActive} searchResultsArr={searchResultsArr} handlePopImage={handlePopImage} />
                }

                {
                    Object.entries(selectedImage).length > 0 &&
                    <ImagePopOver
                        selectedImage={selectedImage}
                        removeImagePopOver={removeImagePopOver}
                    />
                }
            </div>
            {isLoading && <Loader />}
        </div>
    );
}

export default SearchList;
