import { AudioIcon } from "../Assets/AudioIcon";
import { SaveIcon } from "../Assets/SaveIcon";
import { SearchByImage } from "../Assets/SearchByImage";
import { SearchIcon } from "../Assets/SearchIcon";
import { ShareIcon } from "../Assets/ShareIcon";

export const API_URL = 'https://picsum.photos';
export const LIMIT = 30;

export const SEARCH_ICONS = [AudioIcon, SearchByImage, SearchIcon]
export const FOOTER_ICONS = [{ icon: ShareIcon, name: "Share" }, { icon: SaveIcon, name: "Save" }]
