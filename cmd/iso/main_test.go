package main

import (
	"flag"
	"io"
	"strings"
	"testing"
)

func TestInitFlags_DefaultPrettyOutput(t *testing.T) {
	fs := flag.NewFlagSet("iso", flag.ContinueOnError)
	fs.SetOutput(io.Discard)
	initFlags(fs, defaultLangChunks())

	if err := fs.Parse([]string{}); err != nil {
		t.Fatalf("Parse() error = %v", err)
	}

	if compactOutput {
		t.Fatalf("compactOutput = true, want false by default")
	}
}

func TestInitFlags_CompactOutput(t *testing.T) {
	fs := flag.NewFlagSet("iso", flag.ContinueOnError)
	fs.SetOutput(io.Discard)
	initFlags(fs, defaultLangChunks())

	if err := fs.Parse([]string{"-compact"}); err != nil {
		t.Fatalf("Parse() error = %v", err)
	}

	if !compactOutput {
		t.Fatalf("compactOutput = false, want true when -compact is set")
	}
}

func TestInitFlags_RejectsLegacyFmtFlag(t *testing.T) {
	fs := flag.NewFlagSet("iso", flag.ContinueOnError)
	fs.SetOutput(io.Discard)
	initFlags(fs, defaultLangChunks())

	err := fs.Parse([]string{"-fmt"})
	if err == nil {
		t.Fatal("Parse() expected error for removed -fmt flag")
	}

	if !strings.Contains(err.Error(), "flag provided but not defined: -fmt") {
		t.Fatalf("unexpected error: %v", err)
	}
}

func defaultLangChunks() []string {
	chunks := make([]string, 0, len(defaultMapLangToSaveTo))
	for lang, saveTo := range defaultMapLangToSaveTo {
		chunks = append(chunks, strings.Join([]string{lang, saveTo}, ":"))
	}
	return chunks
}
