package util_html

import "regexp"

// RemoveHTMLTags removes HTML tags from a given string.
func RemoveHTMLTags(input string) string {
	re := regexp.MustCompile(`<[^>]*>`)
	return re.ReplaceAllString(input, "")
}
