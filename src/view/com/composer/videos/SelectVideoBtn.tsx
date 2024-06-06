import React, {useCallback} from 'react'
import {
  ImagePickerAsset,
  launchImageLibraryAsync,
  MediaTypeOptions,
  UIImagePickerPreferredAssetRepresentationMode,
} from 'expo-image-picker'
import {msg} from '@lingui/macro'
import {useLingui} from '@lingui/react'

import {atoms as a, useTheme} from '#/alf'
import {Button} from '#/components/Button'
import {VideoClip_Stroke2_Corner0_Rounded as VideoClipIcon} from '#/components/icons/VideoClip'

const VIDEO_MAX_DURATION = 90

type Props = {
  onSelectVideo: (video: ImagePickerAsset) => void
  disabled?: boolean
}

export function SelectVideoBtn({onSelectVideo, disabled}: Props) {
  const {_} = useLingui()
  const t = useTheme()

  const onPressSelectVideo = useCallback(async () => {
    const response = await launchImageLibraryAsync({
      exif: false,
      mediaTypes: MediaTypeOptions.Videos,
      videoMaxDuration: VIDEO_MAX_DURATION,
      quality: 1,
      legacy: true,
      preferredAssetRepresentationMode:
        UIImagePickerPreferredAssetRepresentationMode.Current,
    })
    if (response.assets && response.assets.length > 0) {
      onSelectVideo(response.assets[0])
    }
  }, [onSelectVideo])

  return (
    <>
      <Button
        testID="openGifBtn"
        onPress={onPressSelectVideo}
        label={_(msg`Select GIF`)}
        accessibilityHint={_(msg`Opens GIF select dialog`)}
        style={a.p_sm}
        variant="ghost"
        shape="round"
        color="primary"
        disabled={disabled}>
        <VideoClipIcon
          size="lg"
          style={disabled && t.atoms.text_contrast_low}
        />
      </Button>
    </>
  )
}
