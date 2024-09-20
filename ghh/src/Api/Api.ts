import axios from "axios";
import { APiURL } from "./APiURL";

export function get() {
	axios.get(APiURL).then((results) => {
		return results;
	});
}
