MODULE		= easiness
EXPORT 		= $(MODULE)
BUILD_DIR 	= build
BUNDLE 		= $(BUILD_DIR)/$(MODULE).js
DEMO_BUNDLE 	= demo/bundle.js
DEMO_ENTRY 	= demo/main.js

ENTRY		= index.js

SRC 		= $(ENTRY)

ifneq ($(wildcard lib),)
	SRC += $(shell find lib -type f -name '*.js')
endif

.PHONY: all clean info watch

all: $(BUNDLE) $(DEMO_BUNDLE)

clean:
	rm -f $(BUNDLE)
	rm -f $(DEMO_BUNDLE)

info:
	@echo "Source:" $(SRC)

watch:
	watchify -o $(DEMO_BUNDLE) $(DEMO_ENTRY) &
	watchify -o $(BUNDLE) -s $(EXPORT) $(ENTRY) &

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

$(BUNDLE): $(BUILD_DIR) $(SRC)
	browserify -s $(EXPORT) -o $@ $(ENTRY)

$(DEMO_BUNDLE): $(DEMO_ENTRY) $(SRC)
	browserify -o $@ $(DEMO_ENTRY)