package tt

import (
	"testing"

	"github.com/giant-stone/go/glogging"
)

func TearDown(t *testing.T) {
	// TBD.
}

func Setup(t *testing.T) {
	glogging.Init([]string{"stdout"}, glogging.WARN)
}
