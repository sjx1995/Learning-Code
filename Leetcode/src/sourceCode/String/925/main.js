export const isLongPressedName = (name, typed) => {
	let l = 0;
	let r = 0;
	while (l < name.length || r < typed.length) {
		if (name[l] !== typed[r]) {
			return false;
		}
		// 当检索到name最后一项时，如果匹配typed，则不继续检查输入，直接返回成功
		if (l === name.length - 1 && name[l] === typed[r]) {
			return true;
		}
		if (name[l + 1] === name[l]) {
			l++;
			r++;
			continue;
		}
		if (name[l + 1] !== name[l]) {
			while (typed[r + 1] === typed[r]) {
				r++;
			}
			l++;
			r++;
			continue;
		}
	}
	return true;
};
