import { memo } from "react";
import { Trans, t } from "@lingui/macro";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { useNotifyModalState } from "lib/useNotifyModalState";
import ExternalLink from "components/ExternalLink/ExternalLink";

import "./NotifyModal.scss";

import { ReactComponent as NotifiLogoIcon } from "img/notifi-logo.svg";
import { ReactComponent as ArrowBulletIcon } from "img/arrow-bullet.svg";
import { ReactComponent as ExternalLinkIcon } from "img/external-link.svg";

export function NotifyModal() {
  const { notifyModalOpen, setNotifyModalOpen } = useNotifyModalState();

  return (
    <Modal isVisible={notifyModalOpen} setIsVisible={setNotifyModalOpen} label={t`DarkPool10 Alerts`}>
      <div className="NotifyModal">
        <Trans>
          Get alerts and announcements from DarkPool10 to stay on top of your trades, liquidation risk, and&nbsp;more.
        </Trans>
        <NotifyBulletList />
        <Button
          variant="primary-action"
          to="https://gmx.notifi.network"
          newTab
          className="NotifyModal-button w-full"
          type="submit"
        >
          <Trans>Discover DarkPool10 Alerts</Trans>
          <ExternalLinkIcon />
        </Button>
        <div className="NotifyModal-terms">
          <Trans>
            <span>
              Notifications are provided by Notifi and not affiliated with&nbsp;DarkPool10. By subscribing, you agree
              that info you provide to Notifi will be governed by its{" "}
            </span>
            <ExternalLink href="https://notifi.network/privacy">Privacy Policy</ExternalLink>
            <span> and </span>
            <ExternalLink href="https://notifi.network/terms">Terms of Use</ExternalLink>.
          </Trans>
        </div>
        <div className="NotifyModal-notifi">
          <Trans>Powered by</Trans>
          <NotifiLogoIcon />
        </div>
      </div>
    </Modal>
  );
}

const NotifyBulletList = memo(function NotifyBulletList() {
  return (
    <div className="NotifyModal-bullet-list">
      {[
        t`DarkPool10 Announcements`,
        t`Trade Confirmations`,
        t`Liquidation Confirmations`,
        t`Governance Alerts`,
        t`Trade Errors`,
        t`Liquidation Risk Alerts`,
        t`Trading Pair Price Alerts`,
      ].map((item, i) => (
        <div key={i} className="NotifyModal-bullet">
          <ArrowBulletIcon />
          <div className="NotifyModal-bullet-text">{item}</div>
        </div>
      ))}
    </div>
  );
});
