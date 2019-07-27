import Color from 'color';

/**
 * __Avoid using these "raw" definitions directly, if possible__. Instead, try to use one of the
 * __"semantic" definitions__ further down which map these base colors (or derivatives of them) to
 * what they semantically represent (or consider creating a new one, if no existing definitions
 * adequately describe your use case).
 */

const raw = {
	AMBER: '#F09310',
	BLACK: '#000000',
	BLUE: '#011EAB',
	DARK_BLUE: '#1B1E89',
	GRAY: '#808080',
	GREEN: '#7ED320',
	LIGHT_BLUE: '#5B8CC0',
	LIGHT_GRAY: '#D3D3D3',
	RED: '#D0021B',
	SALMON: '#ED6663',
	SKY_BLUE: '#9AD5EF',
	TRANSPARENT: 'transparent',
	WHITE: '#FFFFFF',
};

export const BLACK = raw.BLACK;
export const TRANSPARENT = raw.TRANSPARENT;
export const WHITE = raw.WHITE;

export const PRIMARY = raw.DARK_BLUE;
export const PRIMARY_ACCENT = raw.BLUE;
export const SECONDARY = raw.AMBER;

export const TEXT_DARK_DEFAULT = Color(BLACK)
	.alpha(0.9)
	.string();

export const TEXT_DARK_DISABLED = Color(BLACK)
	.alpha(0.3)
	.string();

export const TEXT_DARK_FADED = Color(BLACK)
	.alpha(0.5)
	.string();

export const TEXT_LIGHT_DEFAULT = Color(WHITE)
	.alpha(1)
	.string();
// TODO: Figure out appropriate opacities for variants -- will be different to those for `TEXT_DARK`

export const BORDER_DEFAULT = raw.GRAY;
export const BORDER_ERROR = raw.RED;
export const BORDER_SUCCESS = raw.GREEN;

export const BUTTON_BG_DARK_FADED = TEXT_DARK_FADED;
export const BUTTON_BG_GREEN = raw.GREEN;
export const BUTTON_BG_RED = raw.RED;
export const BUTTON_BG_SALMON = raw.SALMON;

export const DIRECTIONAL_POSITIVE = raw.GREEN;
export const DIRECTIONAL_NEGATIVE = raw.RED;

export const GRADIENT_PRIMARY_END = '#390D7D';
export const GRADIENT_PRIMARY_START = raw.LIGHT_BLUE;

/**
 * __NOTE:__ This needs to be used with `background`, NOT `background-color`
 */
export const GRADIENT_PRIMARY = `linear-gradient(135deg, ${GRADIENT_PRIMARY_START}, ${GRADIENT_PRIMARY_END})`;

export const GRADIENT_SECONDARY_END = '#F5990F';
export const GRADIENT_SECONDARY_START = '#D67411';

/**
 * __NOTE:__ This needs to be used with `background`, NOT `background-color`
 */
export const GRADIENT_SECONDARY = `linear-gradient(-45deg, ${GRADIENT_SECONDARY_START}, ${GRADIENT_SECONDARY_END})`;

export const LINK = raw.LIGHT_BLUE;

export const PLACEHOLDER_TEXT_ERROR = raw.RED;
export const PLACEHOLDER_TEXT_DEFAULT = raw.GRAY;

export const TEXT_ERROR = raw.RED;
export const TEXT_REQUIRED = raw.RED;
export const TEXT_SUCCESS = raw.GREEN;

export const TEXT_FIELD_HINT = raw.LIGHT_GRAY;

export function random(alpha: number = 1) {
	return Color.hsv(Math.random() * 360, 100, 100)
		.alpha(alpha)
		.string();
}
