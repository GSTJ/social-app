import React from 'react'
import {useWindowDimensions, View} from 'react-native'
import {msg, Trans} from '@lingui/macro'
import {useLingui} from '@lingui/react'

import {useWebMediaQueries} from 'lib/hooks/useWebMediaQueries'
import {CenteredView} from '#/view/com/util/Views'
import {atoms as a} from '#/alf'
import {Button, ButtonIcon, ButtonText} from '#/components/Button'
import {Divider} from '#/components/Divider'
import {FeedSuggestedFollowsCards} from '#/components/FeedSuggestedFollows'
import {IconCircle} from '#/components/IconCircle'
import {ArrowRotateCounterClockwise_Stroke2_Corner0_Rounded as Refresh} from '#/components/icons/ArrowRotateCounterClockwise'
import {FilterTimeline_Stroke2_Corner0_Rounded as FilterTimeline} from '#/components/icons/FilterTimeline'
import {Text} from '#/components/Typography'

// TODO replace this with new shared hook
function useHeaderOffset() {
  const {isDesktop, isTablet} = useWebMediaQueries()
  const {fontScale} = useWindowDimensions()
  if (isDesktop || isTablet) {
    return 0
  }
  const navBarHeight = 42
  const tabBarPad = 10 + 10 + 3 // padding + border
  const normalLineHeight = 1.2
  const tabBarText = 16 * normalLineHeight * fontScale
  return navBarHeight + tabBarPad + tabBarText
}

export function EmptyTimeline() {
  const {_} = useLingui()
  const offset = useHeaderOffset()

  return (
    <CenteredView sideBorders style={[a.h_full_vh]}>
      <View
        style={[
          a.px_lg,
          {
            paddingTop: offset + a.pt_3xl.paddingTop,
          },
        ]}>
        <IconCircle icon={FilterTimeline} style={[a.mb_2xl]} />

        <Text style={[a.text_xl, a.font_bold, a.mb_sm]}>
          <Trans>Welcome to your timeline</Trans>
        </Text>
        <Text style={[a.mb_sm, a.leading_snug]}>
          <Trans>
            Your timeline is where you can see posts from people you follow.
            It's always chronologically sorted, so you'll never miss a post.
          </Trans>
        </Text>

        <Text style={[a.pt_lg, a.font_bold, a.mb_sm, a.leading_snug]}>
          <Trans>Follow some people to get started!</Trans>
        </Text>
      </View>
      <View style={[a.flex_row, a.align_start]}>
        <FeedSuggestedFollowsCards />
      </View>
      <View style={[a.px_lg]}>
        <Divider />

        <View
          style={[
            a.flex_row,
            a.align_center,
            a.justify_end,
            a.pt_md,
            a.gap_md,
          ]}>
          <Text style={[a.leading_snug]}>
            <Trans>When you're done:</Trans>
          </Text>

          <Button
            label={_(msg`Click to view your timeline`)}
            size="medium"
            variant="solid"
            color="primary">
            <ButtonText>
              <Trans>View your timeline</Trans>
            </ButtonText>
            <ButtonIcon icon={Refresh} position="right" />
          </Button>
        </View>
      </View>
    </CenteredView>
  )
}
