package generator

import "os"

type IGenerator interface {
	Bytes(fmtPretty bool) ([]byte, error)

	WriteTo(saveTo string, perm os.FileMode, pretty bool) error
}
